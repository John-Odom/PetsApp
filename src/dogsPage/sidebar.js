import React, { Component } from 'react'
import {Menu,Sidebar, Dropdown, Header, Checkbox, Form, Button, Grid} from 'semantic-ui-react'
import {cityOptions} from './sidebarCities'

class VerticalSidebar extends Component {
    state={
        Location:null,
        // status:null,
        sizes:[],
        genders:[],
        ages:[]
    }
    handleStatusChange = (e, { status }) => this.setState({ status })
    handleCheckbox = (e, { size, target } ) => {
        if(target.includes(size)){ 
            const remove = (items,index) => {
                return [...items.slice(0,index),
                        ...items.slice(index+1,items.length)];
              };
              const removed = remove(target, target.indexOf(size))
              this.setState({sizes:removed})
        }
        else{ 
           this.setState({sizes: [...target, size]})
        }
    }
    handleGenderChange = (e, { gender }) => {
        if(this.state.genders.includes(gender)){ 
            const remove = (items,index) => {
                return [...items.slice(0,index),
                        ...items.slice(index+1,items.length)];
              };
              const removed = remove(this.state.genders, this.state.genders.indexOf(gender))
              this.setState({genders:removed})
        }
        else{ 
           this.setState({genders: [...this.state.genders, gender]})
        }
    }
    handleAgeChange = (e, { age }) => {
        if(this.state.ages.includes(age)){ 
            const remove = (items,index) => {
                return [...items.slice(0,index),
                        ...items.slice(index+1,items.length)];
              };
              const removed = remove(this.state.ages, this.state.ages.indexOf(age))
              this.setState({ages:removed})
        }
        else{ 
           this.setState({ages: [...this.state.ages, age]})
        }
    }

  render(){
      console.log(this.state)
    return(
    <Sidebar as={Menu} animation={this.props.animation} icon='labeled' inverted
      vertical visible={this.props.visible} width='wide'
    >
      <Header style={{ fontSize: '200%', color: 'white', paddingTop: '1em' }} >
          Filter By:
      </Header>
    <Menu.Item as='a'>
      <p>Location</p>
      <Dropdown
    button
    className='icon'
    floating
    labeled
    options={cityOptions}
    search
    placeholder='Select City'
  />
    </Menu.Item>
    <Menu.Item as='a'>
      <p>Adoption Status</p>
      <Form>
        <Grid columns={2}>
        <Grid.Row>
            <Grid.Column>
            <Form.Field><Checkbox
            radio
            label='Adoptable'
            name='checkboxRadioGroup'
            status='adoptable'
            checked={this.state.status === 'adoptable'}
            onChange={this.handleStatusChange}
          /></Form.Field>  
          </Grid.Column>
            <Grid.Column>
                <Form.Field><Checkbox
            style={{color:'white'}}
            radio
            label='Adopted'
            name='checkboxRadioGroup'
            status='adopted'
            checked={this.state.status === 'adopted'}
            onChange={this.handleStatusChange}
          /></Form.Field>   
            </Grid.Column>
        </Grid.Row>
          <Grid.Row>
          <Grid.Column>
              <Form.Field>
              <Checkbox
            radio
            label='Found'
            name='checkboxRadioGroup'
            status='found'
            checked={this.state.status === 'found'}
            onChange={this.handleStatusChange}
          />
                  </Form.Field>
                  </Grid.Column>
            </Grid.Row>
        <Form.Field>
          
        </Form.Field>
        </Grid>
        
      </Form>
    </Menu.Item>
    <Menu.Item as='a'>
      <p>Size</p>
      <Grid columns={2}>
        <Grid.Row>
            <Grid.Column>
                <Checkbox 
                label='Small'
                size='small'
                target={this.state.sizes}
                onChange={this.handleCheckbox}
                />
                </Grid.Column>
            <Grid.Column>
                <Checkbox 
                label='Medium'
                size='medium'
                target={this.state.sizes}
                onChange={this.handleCheckbox}
                />
                </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Checkbox 
                label='Large' 
                size='large'
                target={this.state.sizes}
                onChange={this.handleCheckbox}
                />
                </Grid.Column>
            <Grid.Column>
                <Checkbox 
                label='X-Large' 
                size='x-large'
                target={this.state.sizes}
                onChange={this.handleCheckbox}
                />
                </Grid.Column>
        </Grid.Row>
      </Grid>
    </Menu.Item>
    <Menu.Item as='a'>
      <p>Gender</p>
      <Grid columns={3}>
        <Grid.Row>
            <Grid.Column><Checkbox 
                label='Female'
                gender='female'
                target={this.state.genders}
                onChange={this.handleGenderChange}
                /></Grid.Column>
            <Grid.Column><Checkbox 
                label='Male'
                gender='male'
                target={this.state.genders}
                onChange={this.handleGenderChange}
                /></Grid.Column>
            <Grid.Column><Checkbox 
                label='Unknown'
                gender='unknown'
                target={this.state.genders}
                onChange={this.handleGenderChange}
                /></Grid.Column>
        </Grid.Row>
      </Grid>
    </Menu.Item>
    <Menu.Item as='a'>
      <p>Age</p>
      <Grid columns={2}>
        <Grid.Row>
            <Grid.Column><Checkbox 
                label='Baby'
                age='baby'
                target={this.state.ages}
                onChange={this.handleAgeChange}
                /></Grid.Column>
            <Grid.Column><Checkbox 
                label='Young'
                age='young'
                target={this.state.ages}
                onChange={this.handleAgeChange}
                /></Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column><Checkbox 
                label='Adult'
                age='adult'
                target={this.state.ages}
                onChange={this.handleAgeChange}
                /></Grid.Column>
            <Grid.Column><Checkbox 
                label='Senior'
                age='senior'
                target={this.state.ages}
                onChange={this.handleAgeChange}
                /></Grid.Column>
        </Grid.Row>
      </Grid>
    </Menu.Item>
    <Menu.Item as='a'>
    <Button>Submit</Button>
    </Menu.Item>
  </Sidebar>
)}
    }

export default VerticalSidebar