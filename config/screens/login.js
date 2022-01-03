import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import styling from '../../styling'
const Login = () => {
    const [name, setName] = useState({})
    return (
        <View style={styles.Login}>
            <View style={styles.Login2}>
                <View style={styles.SignUp}>
                    <Text style={styles.SignUpText}>Sign Up</Text>
                </View>
                <View>
                    <View>
                        <TextInput style={styles.input}
                            onChangeText={(e) => setName({ name: e })}
                            // value={number}
                            placeholder="Name" />
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            onChangeText={(e) => setName({ email: e })}
                            // value={number}
                            placeholder="email" />
                    </View>
                    <View>
                        <TextInput style={styles.input}
                            secureTextEntry={true}
                            onChangeText={(e) => setName({ password: e })}
                            // value={number}
                            placeholder="Password" />
                    </View>
                <TouchableOpacity style={styles.btn}>
                    <Text>
                        SignUp
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
            <View>
            </View>
        </View>
    )
}
export default Login

const styles = StyleSheet.create({ ...styling })
