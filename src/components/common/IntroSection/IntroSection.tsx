import React from 'react';
import Counts from './Counts';

const IntroSection = () => {
  return (
    <>
      <div
        className="relative flex flex-col"
        style={{ marginTop: '149px', paddingLeft: '79px', paddingRight: '133px' }}
      >
        <div
          className="nato-fontfamily z-20 text-[64px] font-black uppercase"
          style={{ lineHeight: '78.72px' }}
        >
          MINT & Sell
          <br />
          <div className="flex">
            your&nbsp;
            <p className="Black-fontfamily" style={{ color: '#AF50BD' }}>
              UNIQUE
            </p>
          </div>
          <div className="flex">
            <p className="Black-fontfamily" style={{ color: '#AF50BD' }}>
              NFT
            </p>
            &nbsp;ART
          </div>
        </div>
        <div className="Actay-fontfamily z-20 mt-10 text-xl" style={{ lineHeight: '28px' }}>
          You can quickly mint NFTs and create your own
          <br />
          collections directly in cross-chain marketplace
        </div>
        <div
          className="z-20 flex items-center justify-between"
          style={{ marginTop: '154px', marginLeft: '37px' }}
        >
          <div
            className={`flex cursor-pointer gap-[10px] rounded-full text-base font-medium uppercase !text-white`}
            style={{
              background:
                'linear-gradient(97.97deg, #F8D46B 1.78%, #A74FBE 37.37%, #302072 89.89%)',
              padding: '33.5px 73px',
              lineHeight: '19.2px',
            }}
          >
            View market
          </div>
          <Counts />
        </div>
        <img
          src="/assets/images/Maskgroup.png"
          width={1536}
          className="absolute z-20"
          style={{ top: '-261px', right: '43px' }}
        />
        <img
          src="/assets/images/Subtract.png"
          width={1536}
          className="absolute z-10"
          style={{ top: '-260px', right: '0px' }}
        />
        <img
          className="absolute z-20"
          style={{ top: '42px', left: '707px', transform: 'rotate(25.29deg)' }}
          width={30}
          src="/assets/connectBtns/Star1.png"
          alt=""
        />
        <img
          className="absolute z-20"
          style={{ top: '225px', left: '15px', transform: 'rotate(-11deg)' }}
          width={40}
          src="/assets/connectBtns/Star2.png"
          alt=""
        />
      </div>
    </>
  );
};

export default IntroSection;
