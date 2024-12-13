<View style={{flext : 1}}> 
<View style={{justifyContent:'center', alignItems:'cneter', height:100, width:300,
marginTop:100,marginLeft:40
}}>
     <Text style={{textAlign:'center',fontSize:30, color:'#F5511E', fontWeight:60}}>Login Here</Text>
</View>
<View>
      <Text style={{textAlign:'center',fontWeight:900}}>Wlecome Back You Have  
           {'\n'} Been Missed!</Text>
</View>
<View style={{marginTop:80}}>
          <TextInput style={{borderWidth:1,marginLeft:40, width:300, borderRadius:10}} placeholder='Email' inputMode='email' maxLength={50} />
          <TextInput style={{borderWidth:1,marginLeft:40, width:300, borderRadius:10,marginTop:30}} placeholder='Email' placeholder='Password' secureTextEntry/>
</View>
<View style={{marginTop:30}}>
      <TouchableOpacity style={{height:50, width:310,justifyContent:'center', marginStart:30}} >
            <Text style={{textAlign:'right',paddingRight:10, color:'#F5511E'}}> forgot Your Password?</Text>
      </TouchableOpacity>
</View>
<View style={{marginTop:10}}>
     <TouchableOpacity style={{height:50,width:315, borderWidth:1, justifyContent:'center',marginLeft:30, borderRadius:10, backgroundColor:'#F5511E'}}>
                  <Text style={{textAlign:'center',color:'white',fontWeight:20}}>Sign In</Text>
     </TouchableOpacity>
</View >
<View style={{marginTop:10}}>
        <TouchableOpacity style={{height:50, width:310,justifyContent:'center', marginStart:30}} >
            <Text style={{textAlign:'center',paddingRight:10}}> Create New Account</Text>
      </TouchableOpacity>
</View>
<View style={{marginTop:10}}>
            <Text style={{textAlign:'center',paddingRight:10, color:'#F5511E'}}> Or Continue With
            </Text>
</View>
<View style={{marginTop:10 , flex:1, flexDirection:'row', justifyContent:'center',}}>
      <Image source={require('./assets/snack-icon.png')} style={{width:50, height:50}} />
      <Image source={require('./assets/snack-icon.png')} style={{width:50, height:50,marginLeft:10,marginRight:10}} />
      <Image source={require('./assets/snack-icon.png')} style={{width:50, height:50}} />
</View>
</View>