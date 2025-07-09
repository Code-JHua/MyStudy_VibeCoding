const playerAction = process.argv[process.argv.length - 1]



if (playerAction !== 'rock' && playerAction !== 'paper' && playerAction !== 'scissors') {
  console.log('⚠️ 请输入 rock、paper 或 scissors');
} else {
    const arr = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * 3)
    const computerAction = arr[random]
    
    console.log('👤 你出的是' + playerAction);
    console.log('🤖 人机出的是' + computerAction);
    
    if (playerAction === computerAction) {
      console.log('🤝 平局');
    } else if (playerAction === 'rock' && computerAction === 'scissors' ||
        playerAction === 'paper' && computerAction === 'rock' ||
        playerAction === 'scissors' && computerAction === 'paper') {
      console.log('🎉 你赢了');
    } else {
      console.log('💔 你输了');
    }
}
