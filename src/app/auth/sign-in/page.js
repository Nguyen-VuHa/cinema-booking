import React from 'react';
import Input from '~/components/ui/Input';

function SignInPage(props) {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div 
                className='w-full bg-layout-primary p-[3.125rem] max-w-[28.125rem] 
                max-sm:p-[1.5rem] max-sm:max-w-[18.75rem] 
                '
            >
                <Input 
                    className='w-full'

                />
           </div>
        </div>
    );
}

export default SignInPage;