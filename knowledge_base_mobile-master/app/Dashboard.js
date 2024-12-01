
import React, { useState } from 'react'
import { View,ScrollView, Text, Pressable, TextInput, Alert, Image } from 'react-native'
import { useRouter } from 'expo-router';
import { styles } from './DashboardStyle'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function DashboardPage() {
  const router = useRouter();
  const[searchInput, setSearchInput] =useState("")

  //Cookies:
  //   useEffect(() => {
  //     const cookies = new Cookies(null, { path: '/' });
  //     const token = cookies.get("token");
  //     if (!token) {
  //         navigate("/");
  //     }
  // }, []);

  const coursesIsPressed = () => {
    router.navigate('/Courses')
  }

  const searchIsPressed = () => {
    Alert.alert('Search Result', `Your search is: ${searchInput}`);
  }


  return (
    <View style={styles.dashbourdPage}>
      <View style={styles.dashbourdContainer}>

        <View style={styles.knowledgeBase}>
      <Text style={styles.text}>📖 Knowledge Base </Text>
       
        <Pressable style={{flexDirection:'row'}}>
            <Text style={styles.logout}>Logout   </Text>
            <Image style = {styles.logoutIcon}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7046/7046204.png' }}
            >
            </Image>
            </Pressable>
    </View>
        {/*Tabs */}
        <View style={styles.tabsContainer}>


          {/*  Courses tab */}
          <View style={styles.tab}>
            <Pressable onPress={coursesIsPressed}>
              <Text style={styles.tabText}>Courses</Text>
            </Pressable>
          </View>
          {/* End courses tab */}

          <View style={styles.searchInput}>
            <TextInput
              placeholder="search"
              value={searchInput} // מחובר למשתנה state
              onChangeText={(text) => setSearchInput(text)} // מעדכן את state לפי הערך שהמשתמש כתב
            />
            <Pressable onPress={searchIsPressed}>
              <Text style={[styles.text, {marginLeft:20}]}>🔍</Text>
            </Pressable>
          </View>
          {/* End search tab */}



        </View>
        {/*End tabs */}

        <View>
          <Text style ={styles.headline}>My favorite courses: </Text>

        </View>
      </View>
      {/*End dashbourdContainer */}

    </View> //End dashbourdPage 


  )
}