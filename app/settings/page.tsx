import { Input } from '@nextui-org/input';
import { Divider } from '@nextui-org/divider';
import { Select } from '@nextui-org/react';

const Settings = () => {
  return (
    <section className='max-w-xl'>
      <div className='flex justify-between items-center'>
        <h1 className='mt-5 mb-5 text-lg'>Settings</h1>
      </div>
      <Divider className='my-4'/>
      <Input className='my-4' label='Username' defaultValue='username'></Input>
      <Input className='my-4' type='email' label='Email' defaultValue='placeholder@email.org'></Input>
      <Input className='my-4' label='Organization' defaultValue='organization'></Input>
      <Input className='my-4' label='Organization Admins' readOnly defaultValue='admin'></Input>
    </section>
  )
}

export default Settings