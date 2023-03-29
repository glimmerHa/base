function sendMessageToFeiShuGroup(msgtype = 'text', content){
    console.log(
        JSON.stringify({
            msgtype,
            [msgtype]: {
              content,},
          })
    )
}
sendMessageToFeiShuGroup('image', 'hello')