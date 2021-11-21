import React from 'react'
import Image from 'next/image'
import Div from '../container'
import Text from '../../base/text'

export const HeaderUser = ({userName, avatar}) => {
    return (
      <Div
        className={`flex justify-between items-center !h-[5.75rem] w-full bg-Cream pl-11 pr-8 border-b border-b-Blue-300`}
      >
        <Div className="relative w-[3.5rem] h-[3.5rem]">
          <Image
            src="/images/produc-logo.svg"
            alt="produc logo"
            layout="responsive"
            width={56}
            height={56}
            className=""
            priority
          />
        </Div>
        <Text className="font-EnRegular text-Blue-700 text-[1.75rem]">
          workspace
        </Text>
        <Div className="flex items-center">
          <Text className="font-EnRegular text-xl text-Blue-600">
            {userName}
          </Text>
          <Div className="relative w-12 h-12 p-[0.375rem] border border-Blue-400 rounded-[50%] ml-2">
            <Image
              src={`${avatar || "/images/user-avatar.svg"}`}
              alt="user avatar"
              layout="responsive"
              width={36}
              height={36}
              className=""
            />
          </Div>
        </Div>
      </Div>
    );
}
