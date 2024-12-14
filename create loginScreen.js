<ScrollView style={{flext : 1, paddingHorizontal:20}} keyboardShouldPersistTaps='handled'> 

<Text style={{textAlign:'center',fontSize:30, color:'#F5511E', fontWeight:800, marginTop:130, marginBottom:25}}>Login Here</Text>
 <Text style={{textAlign:'center',fontWeight:900, fontSize:18}}>Wlecome Back You Have  
      {'\n'} Been Missed!</Text>


<View style={{marginTop:80}}>
     <TextInput style={{borderWidth:1, borderRadius:10,paddingLeft:15,borderColor : onfouce ? "#F5511E" : "black" , backgroundColor:'#FFF4F1', paddingVertical:15, marginBottom:10 }} placeholder='Email' inputMode='email' maxLength={50} onFocus ={()=> setOnfouce(true)} onBlur ={()=> setOnfouce(false)} onSubmitEditing={()=>ref?.current?.focus()} submitBehavior='submit' autoFocus/>
     <View style={{flexDirection:'row', alignItems:'center'}}>
     <TextInput style={{borderWidth:1,borderRadius:10,paddingLeft:15,borderColor : onfouce1 ? "#F5511E" : "black" ,backgroundColor:'#FFF4F1',paddingVertical:15, width:"100%"}} placeholder='Password' secureTextEntry={isshow} onFocus ={()=> setOnfouce1(true)} onBlur ={()=> setOnfouce1(false)} ref={ref} />
     <TouchableOpacity style={{ position:'absolute', right:10}} onPress={()=>{setisshow(!isshow)}}>
           <Text style={{textAlignVertical:'center',}}  >{isshow ? "show" : "Hide"}</Text>    </TouchableOpacity>
     </View>
</View>

 <TouchableOpacity style={{justifyContent:'center',alignSelf:'flex-end',marginVertical:20}} >
       <Text style={{paddingRight:10, color:'#F5511E', fontWeight:900, width:"100%"}}> forgot Your Password?</Text>
 </TouchableOpacity>


<TouchableOpacity style={{height:50,borderWidth:1, justifyContent:'center',borderRadius:10, backgroundColor:'#F5511E', boxShadow:'2 5 5 0 #F5511E60'}}>
             <Text style={{textAlign:'center',color:'white',fontWeight:20,}}>Sign In</Text>
</TouchableOpacity>

<View style={{marginTop:10}}>
   <TouchableOpacity style={{height:50, width:310,justifyContent:'center', marginStart:30}} >
       <Text style={{textAlign:'center',paddingRight:10, fontWeight:600}}> Create New Account</Text>
 </TouchableOpacity>
</View>
<View style={{marginTop:30}}>
       <Text style={{textAlign:'center',paddingRight:10, color:'#F5511E', fontWeight:900}}> Or Continue With
       </Text>
</View>
<View style={{marginTop:20 , flexDirection:'row', justifyContent:'center' , gap:10}}>
<TouchableOpacity style={{backgroundColor:'#EAE9E9',paddingVertical:15,paddingHorizontal:25,borderRadius:15}}>
    <Image source={{uri:"https://cdn4.iconfinder.com/data/icons/picons-social/57/09-google-3-512.png"}} style={{height:25,width:25}}/> 
 </TouchableOpacity>
 <TouchableOpacity style={{backgroundColor:'#EAE9E9',paddingVertical:15,paddingHorizontal:25,borderRadius:15}}>
    <Image source={{uri:"https://img.icons8.com/?size=50&id=118467&format=png"}} style={{height:25,width:25,}}/> 
 </TouchableOpacity>
 <TouchableOpacity style={{backgroundColor:'#EAE9E9',paddingVertical:14,paddingHorizontal:25,borderRadius:15}}>
    <Image source={{uri:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"}} style={{height:25,width:25}}/> 
 </TouchableOpacity>
</View>
</ScrollView>