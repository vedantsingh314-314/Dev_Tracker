import React, { useEffect } from 'react'

const GithubHeatmap = () => {
    useEffect( ()=> {
        console.warn("🚀 1. COMPONENT LOADED: The useEffect is running!");
        const fetchGithubData = async ()=>{
            try {
                // LOUD CHECKPOINT 2
                console.warn("🚀 2. FETCH STARTING: Asking GitHub for data...");
                
                const response = await fetch('https://api.github.com/users/vedantsingh314-314');
                
                // LOUD CHECKPOINT 3
                console.warn("🚀 3. RESPONSE RECEIVED: Converting to JSON...");
                
                const data = await response.json(); 
                
                // LOUD CHECKPOINT 4
                console.warn("🚀 4. DATA UNBOXED! Here it is:", data);
            }
            catch(error){
                console.error("ops error occured ",error);
            }
        }
    },[]);
  return (
    <div className="dashboard-container">
            <h2>GitHub Heatmap Loading...</h2>
        </div>
  )
}

export default GithubHeatmap
