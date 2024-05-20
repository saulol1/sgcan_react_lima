import React from 'react';

function UserOnline({active = true}: { active: boolean }): React.FC {
  return (
    <span 
      className={`${active ? 'bg-success': 'bg-danger'} rounded-circle`} 
      style={{position: 'absolute', width: '10px', height: '10px', bottom: '0px', right: '0px'}}>
    </span>
  );
}

export default React.memo(UserOnline);