import { useState } from 'react'
import { Text, View } from 'react-native'
import TinderCard from 'react-tinder-card'
import CardFoto from '../src/assets/icon/33533030_8058222.svg'
import Close from '../src/assets/icon/close.svg'
import Heart from '../src/assets/icon/heart.svg'


export default function Tinder() {
    const db = [
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
    ]
    const [lastDirection, setLastDirection] = useState()
    const [name, setName] = useState()

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setName(nameToDelete)
        setLastDirection(direction)
    }
    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <View className='flex-1 bg-[#1A1A2F] px-2'>
            <View className='w-full h-screen flex justify-center items-center' >
                <View className='w-[50%] h-[200px]'>
                    {db.map((character) =>
                        <TinderCard
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name)}
                            onCardLeftScreen={() => outOfFrame(character.name)}
                            preventSwipe={['down']}>
                            <View
                                className="w-full h-[200px] absolute bg-white rounded-2xl top- right-0 left-0  flex justify-center items-center flex-col"
                            >
                                <CardFoto />
                                <Text className='mb-10 text-black font-bold text-lg'>
                                    {character.name}
                                </Text>
                            </View>
                        </TinderCard>

                    )}
                </View>
                <View className='w-full h-24 flex flex-row justify-center items-center gap-2'>

                    <View className='w-10 h-10 flex justify-center items-center bg-white rounded-full py-2'>
                        <Close />
                    </View>
                    <View className='w-10 h-10 flex justify-center items-center bg-white rounded-full py-2'>
                        <Heart
                            onPress={() => swiped('right', name)}
                        />
                    </View>

                </View>
                {lastDirection ? <Text className='text-white font-bold text-3xl my-5'>You swiped {lastDirection}</Text> : null}
                {name ? <Text className='text-white font-bold text-3xl my-5'>You swiped {name}</Text> : null}
            </View>
        </View>
    )
}
