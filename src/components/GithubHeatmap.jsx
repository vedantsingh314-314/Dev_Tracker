import React, { useEffect } from 'react'
import { useState } from 'react';

const GithubHeatmap = () => {
    const [profile, setProfile] = useState(null);
    const [activityData, setActivityData] = useState({});
    useEffect( ()=> {
        const fetchGithubData = async ()=>{
            try {
                const response = await fetch('https://api.github.com/users/vedantsingh314-314');
                
                const data = await response.json();
                
                setProfile(data);

                const eventResponse = await fetch('https://api.github.com/users/vedantsingh314-314/events');

                const eventsData = await eventResponse.json();

                console.log(eventsData);

                const dailyCounts={};
                eventsData.forEach(event => {
                    const dateString = event.created_at.split('T')[0];
                    if (dailyCounts[dateString]) {
                        dailyCounts[dateString] = dailyCounts[dateString] + 1;
                    } else {
                        dailyCounts[dateString] = 1;
                    }
                });

                console.log("CLEAN HEATMAP DICTIONARY: ", dailyCounts);
                
                setActivityData(dailyCounts);

            }
            catch(error){
                console.error("ops error occured ",error);
            }
        }
        fetchGithubData();
    },[]);
    const last30Days = [];
    for (let i = 29; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        last30Days.push(date.toISOString().split('T')[0]);
    }

    const getColorLevel = (count) => {
        if (!count || count === 0) return 'color-empty'; 
        if (count >= 1 && count <= 2) return 'color-low';   
        if (count >= 3 && count <= 4) return 'color-med';   
        return 'color-high';                                
    };
  return (<>
    <div className="dashboard-container">
            <h2>GitHub dashboard...</h2>
            {(profile!==null)? (
                <div className="profile-card">
                    <img src={profile.avatar_url} alt="GitHub Avatar" width="100" style={{borderRadius : '50%'}} />
                    
                    <h3>{profile.login}</h3>
                </div>
            ) : (
                <p>Loading Profile...</p>
            )}
        </div>
                    <div style={{ marginTop: '20px' }}>
                        <h4 style={{ color: '#2c3e50', marginBottom: '10px' }}>30-Day Contributions</h4>
                        <div className="heatmap-grid">
                            
                            {last30Days.map((date) => {

                                const count = activityData[date] || 0;
                                
                                return (
                                    <div 
                                        key={date} 
                                        className={`heatmap-square ${getColorLevel(count)}`}
                                        title={`${date}: ${count} contributions`} 
                                    ></div>
                                );
                            })}
                            
                        </div>
                    </div>
        
        </>                 
  )
}

export default GithubHeatmap
