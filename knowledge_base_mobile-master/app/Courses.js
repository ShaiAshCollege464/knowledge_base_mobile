
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router';
import { styles } from './CoursesStyle' 



export default function Courses() {
  return (
    <View>
      <Text style={styles.text}>Courses</Text>
    </View>
  )
}