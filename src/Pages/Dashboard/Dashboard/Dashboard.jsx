import dashboardDef from '/sing_up.mp4'

const Dashboard = () => {
    return (
        <div className='h-full'>
            <video
          className="relative h-full w-full object-fill"
          muted
          autoPlay
          loop
          src={dashboardDef}
        ></video>
        </div>
    );
};

export default Dashboard;