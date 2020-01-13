import React, { Component } from 'react'
import {Menu,Sidebar, Dropdown, Header, Checkbox, Form, Button, Grid} from 'semantic-ui-react'
import {cityOptions} from './sidebarCities'
import {handleSearchSubmit} from '../actions/fetches'
import {landDogs, breedChange, genderChange, ageChange, statusChange, cityChange, sizeChange} from '../actions/reducerActions'
import{connect} from 'react-redux'
import {getBreeds} from '../actions/fetches'

class VerticalSidebar extends Component {
    state={
        city:null,
        status:'adoptable',
        sizes:[],
        genders:[],
        ages:[],
        breedOptions:[],
        loaded:false,
        breeds: []
    }

    componentDidMount (){
      // had a difficult time changing the font color in css, so reverted to finding the 
      // text on the dom and updating once rendered
      document.querySelectorAll('label').forEach(label =>label.style.color="white")
    }

    handleStatusChange = (e, { status }) => this.setState({ status })
    
    handleCityChange = (e, {value}) => this.setState({ city:value })
   
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
    handleBreedChange = (e, { value }) => {
      this.setState({breeds:value})
    }
    handleSearchResults = (data) =>{
      
      this.props.landDogs(data.animals)
      this.props.breedChange(this.state.breeds)
      this.props.genderChange(this.state.genders)
      this.props.ageChange(this.state.ages)
      this.props.statusChange(this.state.status)
      this.props.cityChange(this.state.city)
      this.props.sizeChange(this.state.sizes)
    }

  render(){
    if(this.props.apiToken && !this.state.loaded){
      getBreeds(this.props.apiToken).then(data=>{
        let breedOptions = data.breeds.map(element => {
          return ({ key: element.name, text: element.name, value: element.name })
        });
        breedOptions.unshift({key: null, text: null, value: null})
        this.setState({loaded: true, breedOptions})
      })
    }

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
    onChange={this.handleCityChange}
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
      <p>Breed - type to search</p>
      <Dropdown
    fluid
    multiple
    search
    selection
    options={this.state.breedOptions}
    // search
    onChange={this.handleBreedChange}
    placeholder='Search Breeds'
  />
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
                label={'Medium'}
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
                size='Extra large'
                target={this.state.sizes}
                onChange={this.handleCheckbox}
                />
                </Grid.Column>
        </Grid.Row>
      </Grid>
    </Menu.Item>
    <Menu.Item as='a'>
      <p>Gender</p>
      <Grid columns={2}>
        <Grid.Row>
            <Grid.Column>
              <Checkbox 
                label='Female'
                gender='female'
                target={this.state.genders}
                onChange={this.handleGenderChange}
              />
              </Grid.Column>
            <Grid.Column>
              <Checkbox 
                label='Male'
                gender='male'
                target={this.state.genders}
                onChange={this.handleGenderChange}
              />
            </Grid.Column>
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
    <Button
      onClick={(e)=> {
        handleSearchSubmit(this.state, this.props.apiToken)
          .then(data=> {
            this.props.handleAnimationChange('overlay')()
            this.handleSearchResults(data)
          })
        }
      }
    > Submit
    </Button>
    </Menu.Item>
  </Sidebar>
)}
    }

    const mapStatetoProps = state => {
      return ({
        apiToken: state.apiToken
      })
   }

export default connect(mapStatetoProps, {landDogs, breedChange, genderChange, ageChange, statusChange, cityChange, sizeChange})(VerticalSidebar)