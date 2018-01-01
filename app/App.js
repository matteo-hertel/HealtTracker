import React, { Component } from 'react';
import { View, StyleSheet, Text,DatePickerAndroid } from 'react-native';
import BpkText from 'react-native-bpk-component-text';
import BpkButton from 'react-native-bpk-component-button';
import { spacingBase } from 'bpk-tokens/tokens/base.react.native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacingBase,
  }
});

export default class App extends Component {
	constructor(){
		super();
		this.setStartDate = this.getDate.bind(this, "startDate");
	this.setEndDate = this.getDate.bind(this, "endDate");
this.state = {
	startDate:null,
	endDate:null
}
	}
  async getDate(key){
  try {
  const {action, year, month, day} = await DatePickerAndroid.open({
    // Use `new Date()` for current date.
    // May 25 2020. Month 0 is January.
    date: new Date(2020, 4, 25)
  });
  if (action !== DatePickerAndroid.dismissedAction) {
	  let newState = [];
	  newState[key] = {
    day,
	    month, year
    };
    this.setState(newState);
  }
} catch ({code, message}) {
  console.warn('Cannot open date picker', message);
}
  }
	render() {
    return (
      <View style={styles.container}>
     	<BpkText>
        	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        	commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
        	et magnis dis parturient montes, nascetur ridiculus mus.
	    {JSON.stringify(this.state)}
	</BpkText>
	<BpkButton type="primary" title="Set Start Date" onPress={this.setStartDate} />
	    <BpkButton type="primary" title="Set End Date" onPress={this.setEndDate} />

       </View >
    );
  }
}
