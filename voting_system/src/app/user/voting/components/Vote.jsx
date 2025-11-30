import React, { useEffect } from 'react'
import { portfolios } from './presidents'
import { useState } from 'react'
import { setItem, getItem } from '@/utils/localStorage.js'
import { MdCancel } from "react-icons/md";
import Image from 'next/image'

const Vote = () => {
  const [currentPortfolio, setCurrentPortfolio] = useState(0);
  const [votes, setVotes] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const portfolioNames = Object.keys(portfolios);
  const currentPortfolioName = portfolioNames[currentPortfolio];
  const candidates = portfolios[currentPortfolioName];

  useEffect(()=>{
    const existingVote = getItem('userVote')
    if (existingVote) {
      setHasVoted(true)
    }
  }, [])

   const handleCandidateClick = (candidate) => {
    setSelectedCandidate(candidate);
    setShowConfirmation(true);
  };

  const confirmVote = () => {
    const newVotes = { ...votes, [currentPortfolioName]: selectedCandidate.id };
    setVotes(newVotes);
    setShowConfirmation(false);
    setSelectedCandidate(null);

    // Move to next portfolio or complete voting
    if (currentPortfolio < portfolioNames.length - 1) {
      setCurrentPortfolio(currentPortfolio + 1);
    } else {
      // Save vote to localStorage
      saveVote(newVotes);
      setHasVoted(true);
    }
  };
  const saveVote = (finalVotes) => {
    // Get existing votes from localStorage
    const existingVotes = JSON.parse(getItem('allVotes') || '[]');
    
    // Add new vote with timestamp
    const voteRecord = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      votes: finalVotes
    }; 

    existingVotes.push(voteRecord);
    setItem('allVotes', JSON.stringify(existingVotes));
    setItem('userVote', JSON.stringify(voteRecord));
  }

  const cancelConfirmation = () => {
    setShowConfirmation(false);
    setSelectedCandidate(null);
  };

  if (hasVoted) {
    return (
    
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold mb-2">Vote Submitted!</h1>
          <p className="text-gray-600 mb-6">Thank you for participating in the election.</p>
          <button
            onClick={() => onComplete()}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
          >
           LOGOUT
          </button>
        </div>
      </div>
    );
  }

  return (
  <div>
    <div className='min-h-[95vh] max-w-[100vw] bg-black'>
        <h1 className='text-center text-3xl'> {currentPortfolioName.replace(/([A-Z])/g, ' $1').trim()} </h1>
        <h2 className='text-center text-2xl'>Vote for your prefered candidate</h2>
        
        <div className='flex justify-center gap-10 my-10'>
            {candidates.map((candidate)=>{
              const Name = candidate.name
              const picture = candidate.image
              return(
                <div key={candidate.id} 
                onClick={()=>handleCandidateClick(candidate)}
                className='grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-300'>
                  <Image src={picture}  
                  width={200} 
                  height={200}
                  className=""
                  />
                  <h2 className='text-2xl '>{Name}</h2>
                </div>
              )
            })}
        </div>
    </div>
    
     {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">Confirm Your Vote</h3>
              <button onClick={cancelConfirmation} className="text-gray-400 hover:text-gray-600">
                <MdCancel size={24} />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              You are about to vote for <span className="font-bold">{selectedCandidate?.name}</span> as{' '}
              <span className="font-bold capitalize">
                {currentPortfolioName.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              . This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={cancelConfirmation}
                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmVote}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg hover:shadow-lg transition"
              >
                Confirm Vote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  
  )
}

export default Vote