import React, { createContext, useMemo, useState } from 'react';

export const CtxVideoTime = createContext(null);

const CtxVideoTimeContext: React.FC = ({children}) => {

  const [currentTime, setCurrentTime] = useState(0);

  const currentVideoTimeValue = { currentTime, setCurrentTime };

  const contextValue = useMemo(() => { return {currentVideoTimeValue} }, 
  [currentTime]);

  return (
    <CtxVideoTime.Provider value={currentVideoTimeValue}>
      {children}
    </CtxVideoTime.Provider>
  )
}

export default CtxVideoTimeContext;