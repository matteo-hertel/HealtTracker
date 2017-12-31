import SamsungHealth from 'react-native-samsung-health'


SamsungHealth.authorize((err, res) => {
  if (res) {
    let opt = {
    };
    SamsungHealth.getDailyStepCountSamples(opt, (err, res) => {
      if (err) {
      this.setState({"msg":`Error: $(err)`});
      }
      if (res){
      this.setState({"msg":JSON.stringify(res)});

      }
    });
  } else{ this.setState({"msg": `Error: $(err)`})};

