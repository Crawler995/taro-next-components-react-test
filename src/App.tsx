import React from 'react';

import {
  View, 
  Button, 
  Input, 
  Text, 
  Image, 
  Textarea,
  Form,
  Icon,
  Progress,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  Label,
  Slider,
  Switch,
  Picker,
  ScrollView
} from '@tarojs/components';
import ComponentsContainer from './components/utils/components-container';

function App() {
  return (
    <div className="App">
      <ComponentsContainer componentsName="View">
        <View>hello world</View>
      </ComponentsContainer>

      <ComponentsContainer componentsName="ScrollView">
        <ScrollView style={{ height: '200px' }} scrollY scrollWithAnimation>
          <View style={{ height: '150px' }}>ScrollViewItem</View>
          <View style={{ height: '150px' }}>ScrollViewItem</View>
          <View style={{ height: '150px' }}>ScrollViewItem</View>
        </ScrollView>
      </ComponentsContainer>
      
      <ComponentsContainer componentsName="Button & Form">
        <Button onClick={() => console.log('hello world')}>hello world</Button>
        <Button type="warn">hello world</Button>
        <Button size="mini">hello world</Button>
        <Button type="warn" size="mini">hello world</Button>
        <Button loading>hello world</Button>
        <Button disabled>hello world</Button>
        <Form onSubmit={(e: any) => console.log('form submitted')}>
          <Button formType="submit">submit form</Button>
        </Form>
      </ComponentsContainer>

      <ComponentsContainer componentsName="Input">
        <Input placeholder="maxlength=6" maxlength={6} />
        <Input placeholder="password" password />
        <Input placeholder="number" type="number" />
        <Input placeholder="with onInput callback" onInput={(e: any) => console.log(e.detail.value)} />
        <Input placeholder="with onFocus callback" onFocus={() => console.log('input focused')} />
      </ComponentsContainer>

      <ComponentsContainer componentsName="Text">
        <Text>hello world</Text>
      </ComponentsContainer>

      <ComponentsContainer componentsName="Image">
        <Image
          style={{
            width: '140px',
            height: '140px'
          }}
          src="http://p2.music.126.net/lkHv1jiBBIJY-YnEBmBECg==/109951165137176253.jpg?param=140y140"
        />
      </ComponentsContainer>

      <ComponentsContainer componentsName="Textarea">
        <Textarea placeholder="maxlength=6" maxlength={6} />
        <Textarea placeholder="with onInput callback" onInput={(e: any) => console.log(e.detail.value)} />
        <Textarea placeholder="with onFocus callback" onFocus={() => console.log('textarea focused')} />
      </ComponentsContainer>

      <ComponentsContainer componentsName="Icon">
        <Icon size="30" type="success" />
        <Icon size="45" type="info" />
        <Icon size="60" type="warn" color="#ccc" />
      </ComponentsContainer>

      <ComponentsContainer componentsName="Progress">
        <Progress percent={20} showInfo strokeWidth={2} />
        <Progress percent={40} strokeWidth={2} active />
        <Progress percent={60} strokeWidth={2} active />
        <Progress percent={80} strokeWidth={2} active activeColor="blue" />
      </ComponentsContainer>

      <ComponentsContainer componentsName="Checkbox & Label">
        <CheckboxGroup onChange={(e: any) => console.log(e.detail.value)}>
          <Checkbox value='选项1' checked id="checkbox-1" />
          <Label for="checkbox-1">选项1</Label>
          <Checkbox id="checkbox-2" value='选项2'/>
          <Label for="checkbox-2">选项2</Label>
        </CheckboxGroup>
      </ComponentsContainer>

      <ComponentsContainer componentsName="Radio & Label">
        <RadioGroup onChange={(e: any) => console.log(e.detail.value)}>
          <Radio value='选项1' checked id="radio-1" />
          <Label for="radio-1">选项1</Label>
          <Radio value='选项2' id="radio-2" />
          <Label for="radio-2">选项1</Label>
        </RadioGroup>
      </ComponentsContainer>

      <ComponentsContainer componentsName="Slider">
        <Slider step={1} value={50} onChange={(e) => console.log(e.detail.value)} />
        <Slider step={1} value={50} showValue onChange={(e) => console.log(e.detail.value)} />
        <Slider step={1} value={100} showValue min={50} max={200} onChange={(e) => console.log(e.detail.value)}/>
      </ComponentsContainer>

      <ComponentsContainer componentsName="Switch">
        <Switch onChange={() => console.log('switch changed')} />
        <Switch checked onChange={() => console.log('switch changed')} />
      </ComponentsContainer>

      <ComponentsContainer componentsName="Picker">
        <Picker mode="time" onChange={(e) => console.log(e.detail.value)} value="00:00">
          <View>Time Picker | Click me!</View>
        </Picker>
        <Picker mode="date" onChange={(e) => console.log(e.detail.value)} value="2020-08-04">
          <View>Date Picker | Click me!</View>
        </Picker>
      </ComponentsContainer>
    </div>
  );
}

export default App;
