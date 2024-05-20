import React, { createContext, useMemo, useState } from 'react';

export const CtxVideoCurrentSentences = createContext(null);

const CtxVideoCurrentSentencesContext: React.FC = ({children}) => {

  const [sentences, setSentences] = useState(null);

  const currentVideoSentencesValue = { sentences, setSentences };

  const contextValue = useMemo(() => { return {currentVideoSentencesValue} }, 
  [sentences, setSentences]);

    //, currentTime, setCurrentTime, sentences, setSentences

  return (
    <CtxVideoCurrentSentences.Provider value={contextValue}>
      {children}
    </CtxVideoCurrentSentences.Provider>
  )
}

export default CtxVideoCurrentSentencesContext;