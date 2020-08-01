import React from 'react';

import {
  View, 
  Button, 
  Input, 
  Text, 
  Image, 
  Textarea 
} from '@tarojs/components';
import ComponentsContainer from './components/utils/components-container';

function App() {
  return (
    <div className="App">
      <ComponentsContainer componentsName="View">
        <View>hello world</View>
      </ComponentsContainer>
      
      <ComponentsContainer componentsName="Button">
        <Button>hello world</Button>
        <Button type="warn">hello world</Button>
        <Button size="mini">hello world</Button>
        <Button type="warn" size="mini">hello world</Button>
        <Button loading>hello world</Button>
        <Button disabled>hello world</Button>
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
    </div>
  );
}

export default App;
