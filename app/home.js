import { Stack } from 'expo-router';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Welcome from '../components/Welcome';
import InputBox from '../components/InputBox';
import NoteCard from '../components/NoteCard';
import NoteLogo from '../assets/images/notes.png';
import { useState } from 'react';

export default Home = () => {
    const [allNotes, setAllNotes] = useState(
        [
            {
                id: 1,
                title: 'Note 1',
                body: 'This is note 1',
            },
            {
                id: 2,
                title: 'Note 1',
                body: 'This is note 1',
            },
            {
                id: 3,
                title: 'Note 1',
                body: 'This is note 1',
            },
            {
                id: 4,
                title: 'Note 1',
                body: 'This is note 1',
            },
            {
                id: 5,
                title: 'Note 1',
                body: 'This is note 1',
            },
            {
                id: 6,
                title: 'Note 1',
                body: 'This is note 1',
            },
            {
                id: 7,
                title: 'Note 1',
                body: 'This is note 1',
            },
            {
                id: 8,
                title: 'Note 1',
                body: 'This is note 1',
            },
        ]
    )

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#f2f2f2',


                    },
                    headerShadowVisible: false,

                    headerTitle: '',
                    headerLeft: () => (
                        <Image
                            source={NoteLogo}
                            style={{
                                height: 30,
                                width: 30,
                                marginLeft: 10,
                            }}
                        />
                    ),
                    headerRight: () => (
                        <>
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    marginRight: 10,
                                    gap: 10,
                                }}
                            >
                                <Text
                                    style={{

                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        color: '#22c55e',
                                    }}
                                >Notes Count</Text>
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        backgroundColor: '#22c55e',
                                        paddingHorizontal: 5,
                                        borderRadius: '50%',
                                    }}
                                >{
                                        allNotes.length
                                    }

                                </Text>
                            </View>

                        </>
                    )

                }} />
            <View style={{
                padding: 10,
            }}>
                <Welcome />
                <InputBox setAllNotes={setAllNotes} />
                <ScrollView>
                    {
                        allNotes.map((note) => {
                            return <NoteCard key={note.id} note={note} setAllNotes={setAllNotes} allNotes={allNotes} />
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView>


    )
};
