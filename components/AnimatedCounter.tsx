'use client';

import CountUp from 'react-countup';

const AnimatedCounted = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
      <CountUp 
        decimals={2}
        decimal=','
        prefix='USD'
        end={amount} />
    </div>
  )
}

export default AnimatedCounted