import React from 'react';
import '../components/DashBoard.css';

export const Dashboard = () => {
  return (
    <div>
      <section className="banner">
        <div className="content">
          <h1>Explore Redesigned Able Pro</h1>
          <p>
            The Brand new User Interface with power of Material-UI Components.
            Explore the Endless possibilities with Able Pro.
          </p>
          <button className="cta-button">Exclusive On Themeforest</button>
        </div>
        <div className="image">
          <img src="rocket.png" alt="Rocket Image" />
        </div>
      </section>
    </div>
  );
};
