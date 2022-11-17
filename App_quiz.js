import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Switch,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ToastAndroid,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';
var _ = require('lodash');

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
 } from 'react-native-responsive-screen'

import AsyncStorage from '@react-native-community/async-storage';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import email from 'react-native-email'

const pit= [
0,0,'What is the color of ladybird?','Red', 'Blue','Orange', 'White',1,
1,1,'What is the color of dolphin?','Red', 'Blue','Orange', 'White',2,
2,0,'What is the color of orange?','Red', 'Blue','Orange', 'White',3,
3,1,'What is the number 10?','10', '20','30', '5',1,

];

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cou: 0,
      cou2:0,
      cou3:0,
      cou4:0,
      coustr:0,
      tocA:0,
      netA:0,
      tocB:0,
      netB:0,
      tocC:0,
      netC:0,
      tocD:0,
      netD:0,
      TOCNI:0,
      KRIVI:0,
      lockTOCNI:0,
      lockKRIVI: 0,
      beginner:0,
      master:0,
      schoice:0,
      end:0,
      opacity:0,
      beg:0,
      mast:0,
    }}
  

    handleEmail = () => {
      const to = ['ivor.santak@gmail.com'] // string or array of email addresses
      email(to, {
          subject: 'Pozdrav od reacta',
          body: 'Da li radi'
      }).catch(console.error)
  }

  storeData = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', pit.length.toString())
    } catch (e) {
      // saving error
    }
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        console.log(value);
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }


  cnt(){
    if (this.state.cou==0){
    this.setState({
      cou: 1,
    })}
    else{
    this.setState({
      cou: 0,
      cou2:0,
    })
    }
    console.log("cou="+this.state.cou)
  }

  cnt2(){
    if (this.state.cou2==0){
    this.setState({
      cou3: 1,
      cou:0,
    })}
   else{
    this.setState({
      cou2: 0,
    })
    }
    console.log("cou2="+this.state.cou2)
  }

  cnt3(){
    this.setState({
      cou3: 0,
      cou2: 0,
      cou:0,
    })

    console.log("cou3="+this.state.cou3)
  }

  cnt4(){

    this.setState({
      cou3: 2,
      cou2:0,
      cou:0,
    })
    console.log("cou4="+this.state.cou4)
  }
  A(){
    console.log("A")
    console.log("pit[7+8*this.state.coustr "+pit[7+8*this.state.coustr])
    if (1==pit[7+8*this.state.coustr]){
      console.log("TOcan odgovor je A")
      if (this.state.lockTOCNI==0){ 
      this.setState({
        TOCNI : this.state.TOCNI +1,
        lockTOCNI:1,
        lockKRIVI:1,
      tocA:1,
      })
    }
    }
    else{
      if(this.state.lockKRIVI==0){
      this.setState({
        KRIVI: this.state.KRIVI +1,
      lockKRIVI: 1,
      lockTOCNI:1,
    })
  }
  }
  }

  B(){
    console.log("B")
    console.log("pit[7+8*this.state.coustr "+pit[7+8*this.state.coustr])
    if (2==pit[7+8*this.state.coustr]){
      console.log("TOcan odgovor je B")
      if (this.state.lockTOCNI==0){ 
      this.setState({
        TOCNI : this.state.TOCNI +1,
        lockTOCNI:1,
        lockKRIVI:1,
        tocB:1,
        })
      }

    }
    else{
      if(this.state.lockKRIVI==0){
      this.setState({
        KRIVI: this.state.KRIVI +1,
      lockKRIVI: 1,
      lockTOCNI:1,
    })
  }
  }
  }
  C(){
    console.log("C")
    console.log("pit[7+8*this.state.coustr "+pit[7+8*this.state.coustr])
    if (3==pit[7+8*this.state.coustr]){
      console.log("TOcan odgovor je C")
      if (this.state.lockTOCNI==0){ 
      this.setState({
        TOCNI : this.state.TOCNI +1,
        lockTOCNI:1,
        lockKRIVI:1,
        tocC:1,
        })
      }
    } 
    else{
      if(this.state.lockKRIVI==0){
      this.setState({
        KRIVI: this.state.KRIVI +1,
      lockKRIVI: 1,
      lockTOCNI:1,
    })
  }
  }
}
  D(){
    console.log("D")
    console.log("pit[7+8*this.state.coustr "+pit[7+8*this.state.coustr])
    if (4==pit[7+8*this.state.coustr]){
      console.log("TOcan odgovor je D")
      if (this.state.lockTOCNI==0){ 
      this.setState({
        TOCNI : this.state.TOCNI +1,
        lockTOCNI:1,
        lockKRIVI:1,
        tocD:1,
        })
      }
    } 
    else{
      if(this.state.lockKRIVI==0){
      this.setState({
        KRIVI: this.state.KRIVI +1,
      lockKRIVI: 1,
      lockTOCNI:1,
    })
  }
  }
}
  
 str(){

   this.setState({
    coustr : this.state.coustr +1 ,
   tocA:0,
   tocB:0,
   tocC:0,
   tocD:0,
   lockTOCNI:0,
   lockKRIVI:0,
  })
  console.log("Nova stranica  " + this.state.coustr)
   
}

 beg(){
  this.setState({
    cou:0,
    beg:1,
    schoice:1,
    opacity:1,
   })
   console.log("beg"+this.state.beg)

 }

 mast(){
  this.setState({
    cou:0,
    mast:1,
    schoice:1,
    opacity:1,
   })
   console.log("mast"+this.state.mast)

 }

 end(){
  this.setState({
    beg:0,
    mast:0,
    schoice:0,
    cou:0,
    opacity:0,
    coustr:0,
    TOCNI:0,
    KRIVI:0
   })

 }


  render() {
    
  return (
    
    <View style={styles.container}>
        {this.state.cou3 == 0?
/*HOME STRANICA */
                <ImageBackground source={require('./static/pozadina.png')} style={styles.imagepoz}>
                        {this.state.cou == 1? 
                        <View>
                            <TouchableOpacity style={styles.menuic}
                            onPress={this.cnt.bind(this)}>
                              <Image source={require('./static/x.png')} style={styles.imgic}></Image>
                            </TouchableOpacity>
                              <Image source={require('./static/padajucimenu.png')} style={styles.padmenu} />
                            <TouchableOpacity style={{position: 'absolute', top:80, left:255}} onPress={this.cnt2.bind(this)}>
                              <Image style={{width:90, resizeMode:"contain"}} source={require('./static/play.png')} ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={{position: 'absolute', top:130, left:255}} onPress={this.cnt4.bind(this)}>
                              <Image style={{width:90, resizeMode:"contain"}} source={require('./static/abt.png')} ></Image>
                            </TouchableOpacity>
                        </View>:
                            <TouchableOpacity  style={styles.menuic}
                            onPress={this.cnt.bind(this)}>
                              <Image source={require('./static/menuic.png')} style={styles.imgic}></Image>
                            </TouchableOpacity>
                        }  
                        {/*        
                        primanje i spremanje podataka  
                        <Button
                          onPress={this.getData}
                          title="Retrieve data"
                          color="#841584"
                          accessibilityLabel="Learn more about this purple button"
                        />
                        <Text>******************</Text>
                                                <Button
                          onPress={this.storeData}
                          title="Store data"
                          color="#841584"
                          accessibilityLabel="Learn more about this purple button"
                        />
                        <Text>******************</Text>
                        <Text>******************</Text>
                        <Text>******************</Text>
                        <Text>******************</Text>
                        */}
                </ImageBackground>

        :this.state.cou3 == 1?
                              /*PLAY STRANICA */
                      <ImageBackground source={require('./static/pitanja.png')} style={styles.imagepoz}>
                        {this.state.schoice==0?   
                        <View>                      
                            <TouchableOpacity style={{position: 'absolute', top:280, left:60,height:100}} onPress={this.beg.bind(this)}>
                              <Image style={{width:240,marginTop:-50, resizeMode:"contain"}} source={require('./static/beginner.png')} ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={{position: 'absolute', top:380, left:60,height:100}} onPress={this.mast.bind(this)}>
                              <Image style={{width:240,marginTop:-50, resizeMode:"contain"}} source={require('./static/master.png')} ></Image>
                            </TouchableOpacity>
                            </View>  
                        :
                                  <View>
                                    {this.state.lockKRIVI == 1 || this.state.lockTOCNI == 1?
                                        <TouchableOpacity style={{position: 'absolute', top:10, left:10, height:100, display:"flex", flexDirection:"column"}} onPress={this.str.bind(this)}>
                                          <Text >Novo pitanje</Text>
                                          <Text >{this.state.coustr}</Text>
                                          <Text >TOCNI:</Text>
                                          <Text >{this.state.TOCNI}</Text>
                                          <Text >KRIVI:</Text>
                                          <Text >{this.state.KRIVI}</Text>
                                        </TouchableOpacity>
                                        
                                        :
                                        null}
{/*!!! SLOZITI !!! */}
                                        <Text style={{position: 'absolute', top:70, left:50}} >{pit[0+8*this.state.coustr]+1+"/"+pit.length/8}</Text>




                                                  {pit[1+8*this.state.coustr] == 0 && this.state.beg == 1?
                                              <Text style={{position: 'absolute', top:100, left:50}}>{pit[2+8*this.state.coustr]}</Text>
                                                    :this.state.beg==1?
                                                    [this.str()]
                                                    :null
                                                  }
                                                  {pit[1+8*this.state.coustr] == 1 && this.state.mast == 1?
                                              <Text style={{position: 'absolute', top:100, left:50}}>{pit[2+8*this.state.coustr]}</Text>
                                                    :this.state.mast==1?
                                                    [this.str()]
                                                    :null
                                                  }
                                                  


                                      <TouchableOpacity style={{position: 'absolute', top:280, left:10, height:100, display:"flex", flexDirection:"column"}} onPress={this.A.bind(this)}>
                                            {this.state.tocA == 0?
                                                <Image style={{width:340,marginTop:-100, resizeMode:"contain"}} source={require('./static/btnhr.png')} ></Image>
                                                :
                                                <Image style={{width:340,marginTop:-100, resizeMode:"contain"}} source={require('./static/btnhg.png')} ></Image>
                                            }
                                <Text style={{position: 'absolute', color:"white"}}>{pit[3+8*this.state.coustr]}</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{position: 'absolute', top:380, left:10,height:100}} onPress={this.B.bind(this)}>
                                      {this.state.tocB == 0?
                                                <Image style={{width:340,marginTop:-100, resizeMode:"contain"}} source={require('./static/btnhr.png')} ></Image>
                                                :
                                                <Image style={{width:340,marginTop:-100, resizeMode:"contain"}} source={require('./static/btnhg.png')} ></Image>
                                            }
                                        <Text style={{position: 'absolute', color:"white"}}>{pit[4+8*this.state.coustr]}</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{position: 'absolute', top:480, left:10, height:100}} onPress={this.C.bind(this)}>
                                      {this.state.tocC == 0?
                                                <Image style={{width:340,marginTop:-100, resizeMode:"contain"}} source={require('./static/btnhr.png')} ></Image>
                                                :
                                                <Image style={{width:340,marginTop:-100, resizeMode:"contain"}} source={require('./static/btnhg.png')} ></Image>
                                            }
                                        <Text style={{position: 'absolute', color:"white"}}>{pit[5+8*this.state.coustr]}</Text>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{position: 'absolute', top:580, left:10,height:100}} onPress={this.D.bind(this)}>
                                      {this.state.tocD == 0?
                                                <Image style={{width:340,marginTop:-100, resizeMode:"contain"}} source={require('./static/btnhr.png')} ></Image>
                                                :
                                                <Image style={{width:340,marginTop:-100, resizeMode:"contain"}} source={require('./static/btnhg.png')} ></Image>
                                            }
                                        <Text style={{position: 'absolute', color:"white"}}>{pit[6+8*this.state.coustr]}</Text>
                                      </TouchableOpacity>

                                  </View>}
                                  {this.state.cou == 1?
                                  <View>
                                      <TouchableOpacity style={styles.menuic}
                                      onPress={this.cnt.bind(this)}>
                                        <Image source={require('./static/x.png')} style={styles.imgic}></Image>
                                      </TouchableOpacity>
                                  <Image source={require('./static/padajucimenu.png')} style={styles.padmenu} />
                                      <TouchableOpacity style={{position: 'absolute', top:80, left:255}} onPress={this.cnt3.bind(this)}>
                                            <Image style={{width:90, resizeMode:"contain"}} source={require('./static/home.png')} ></Image>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{position: 'absolute', top:130, left:255}} onPress={this.cnt4.bind(this)}>
                                        <Image style={{width:90, resizeMode:"contain"}} source={require('./static/abt.png')} ></Image>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{position: 'absolute', top:180, left:255, opacity: this.state.opacity}} onPress={this.end.bind(this)}>
                                        <Image style={{width:90, resizeMode:"contain"}} source={require('./static/end.png')} ></Image>
                                      </TouchableOpacity>
                                  </View>:
                                      <TouchableOpacity  style={styles.menuic}
                                      onPress={this.cnt.bind(this)}>
                                        <Image source={require('./static/menuic.png')} style={styles.imgic}></Image>
                                      </TouchableOpacity>
                                  }            
                                
                      </ImageBackground>
        :this.state.cou3 == 2?
        /*ABOUT STRANICA */
            <ImageBackground source={require('./static/about.png')} style={styles.imagepoz}>
              <ScrollView style={{position: 'absolute', top:300, left:60,height:100, color:"white", backgroundColor:"green"}}>
<Text >
  About me text kdshf sdk ,sdmn,f  {"\n"}
  ksdhksjhj o shdfhs kfh skahfk sh {"\n"}
  khs dfk kshkshkshfkshfk          {"\n"}
  About me text kdshf sdk ,sdmn,f  {"\n"}
  ksdhksjhj o shdfhs kfh skahfk sh {"\n"}
  khs dfk kshkshkshfkshfk          {"\n"}

  </Text>
  </ScrollView>

                        {this.state.cou == 1? 
                        <View>
                            <TouchableOpacity style={styles.menuic}
                            onPress={this.cnt.bind(this)}>
                              <Image source={require('./static/x.png')} style={styles.imgic}></Image>
                            </TouchableOpacity>
                        <Image source={require('./static/padajucimenu.png')} style={styles.padmenu} />
                            <TouchableOpacity style={{position: 'absolute', top:80, left:255}} onPress={this.cnt2.bind(this)}>
                              <Image style={{width:90, resizeMode:"contain"}} source={require('./static/play.png')} ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style={{position: 'absolute', top:130, left:255}} onPress={this.cnt3.bind(this)}>
                                  <Image style={{width:90, resizeMode:"contain"}} source={require('./static/home.png')} ></Image>
                            </TouchableOpacity>
                        </View>:
                            <TouchableOpacity  style={styles.menuic}
                            onPress={this.cnt.bind(this)}>
                              <Image source={require('./static/menuic.png')} style={styles.imgic}></Image>
                            </TouchableOpacity>
                        }            

                            <TouchableOpacity style={{position: 'absolute', top:580, left:60,height:100}} onPress={this.handleEmail}>
                              <Image style={{width:240,marginTop:-120, resizeMode:"contain"}} source={require('./static/feedback.png')} ></Image>
                            </TouchableOpacity>
                      

                </ImageBackground>
        : null

            }
  </View>
);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1  },
  imagepoz: {
    flex: 1,
    resizeMode:"contain",
    justifyContent: "center",
    
  },
  menuic: {
    marginLeft: 260,
    marginRight: 15,
    marginBottom:590,
    zIndex:1,
    },
  imgic: {
    width: 80,
    height: 80,

  },
  padmenu:{
  width:120,
  height:290,
  marginLeft:240,
  top:-20,
  position: 'absolute',

},
});
