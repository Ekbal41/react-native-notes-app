import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function InputBox({ setAllNotes }) {
    const [input, setInput] = useState('');
    const handlePress = () => {
        const newNote = {
            id: uuidv4(),
            title: 'Static Title',
            body: input,
        }
        setAllNotes(prev => [newNote, ...prev]

        )
        setInput('')
    }

    return (
        <View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <TextInput
                    placeholder='Enter your note here...'
                    style={{
                        backgroundColor: '#fff',
                        padding: 10,
                        borderRadius: 5,
                        fontSize: 18,
                        color: '#a3a3a3',
                        marginVertical: 10,
                        flex: 1,


                    }}
                    value={input}

                    onChange={
                        (e) => {
                            setInput(e.target.value)
                        }
                    }
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: '#22c55e',
                        padding: 12,
                        borderRadius: 5,
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        marginLeft: 10,

                    }}
                    onPress={
                        handlePress
                    }

                >
                    <Text style={{
                        color: '#fff',
                    }}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

