import { useState } from 'react'
import { Text, View } from 'react-native'
import TinderCard from 'react-tinder-card'
import CardFoto from '../src/assets/icon/33533030_8058222.svg'
import Close from '../src/assets/icon/close.svg'
import Heart from '../src/assets/icon/heart.svg'

interface IArray {
  name: string
}
export default function Tinder() {
  const [db, setdb] = useState<IArray[]>([
    {
      name: 'Ana',
    },
    {
      name: 'Bruno',
    },
    {
      name: 'Monica',
    },
    {
      name: 'João',
    },
    {
      name: 'Daniel',
    },
    {
      name: 'Pedro',
    },
    {
      name: 'Carlos',
    },
    {
      name: 'Maria',
    },
    {
      name: 'Paulo',
    },
    {
      name: 'Felipe',
    },
    {
      name: 'Ricardo',
    },
    {
      name: 'Amanda',
    },
    {
      name: 'Julia',
    },
    {
      name: 'Renata',
    },
    {
      name: 'Claudia',
    }
  ])
  const [lastDirection, setLastDirection] = useState()
  const [name, setName] = useState('' as string)

  const swiped = (direction, nameToDelete) => {
    setName(nameToDelete)
    setLastDirection(direction)
    if (nameToDelete === 'Ana') {
      setdb([])
      setName('')
    }
  }


  return (
    <View className='flex-1 bg-[#1A1A2F] px-2'>
      <View className='w-full h-screen flex justify-center items-center' >
        <View className='w-[50%] h-[200px]'>
          {db.length === 0 ? (
            <View className='w-full h-full flex justify-center items-center bg-white/20 shadow-lg shadow-white rounded-lg flex-nowrap'>
              <Text className="text-white font-bold text-lg">Não há mais pessoas.</Text>
            </View>
          ) : (
            db.map((character) => (
              <TinderCard
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name)}
                preventSwipe={['down']}
              >
                <View className="w-full h-[200px] absolute bg-white rounded-2xl top- right-0 left-0 flex justify-center items-center flex-col">
                  <CardFoto />
                  <Text className='mb-10 text-black font-bold text-lg'>
                    {character.name}
                  </Text>
                </View>
              </TinderCard>
            ))
          )}
        </View>
        <View className='w-full h-24 flex flex-row justify-center items-center gap-2'>

          <View className='w-10 h-10 flex justify-center items-center bg-white rounded-full py-2'>
            <Close />
          </View>
          <View className='w-10 h-10 flex justify-center items-center bg-white rounded-full py-2'>
            <Heart
            />
          </View>

        </View>
        {lastDirection ?
          (
            <View className='w-auto h-10 flex justify-center items-center bg-white rounded-lg px-4'>
              <Text className='text-black text-xl '>You swiped:  {lastDirection}</Text>
            </View>
          ) :
          (null)}
        {name ? <Text className='text-gray-400 font-bold text-sm my-5'>You swiped: {name}</Text> : null}
      </View>
    </View>
  )
}
