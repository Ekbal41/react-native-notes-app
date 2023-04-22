import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
export default function NoteCard({ note, setAllNotes, allNotes }) {
    const handleDelete = (id) => {

        const updatedNotes = allNotes.filter(note => {
            return note.id !== id;
        })
        setAllNotes([
            ...updatedNotes
        ])


    }

    return (
        <View  >
            <View style={{
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 5,
                marginBottom: 10,

            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',

                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#22c55e',
                        textTransform: 'uppercase',

                    }}>
                        {note.title}
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#22c55e',
                            borderRadius: "50%",
                            padding: 5,
                            backgroundColor: '#fff',
                        }}
                        onPress={() => {
                            handleDelete(note.id)
                        }}
                    >
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{
                        fontSize: 16,
                        color: '#a3a3a3',
                        marginTop: 5,

                    }}
                >
                    {note.body}
                </Text>

            </View>

        </View>
    );
}