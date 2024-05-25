"use client"

import React from 'react';
import Button from '~/components/ui/Button';
import Input from '~/components/ui/Input';

function SignInPage() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div 
                className='w-full bg-layout-primary p-[3.125rem] max-w-[28.125rem] 
                max-sm:p-[1.5rem] max-sm:max-w-[18.75rem] 
                '
            >
                <Input 
                    className='w-full'
                    errMessage="Trường này bắt buộc"
                />
                <Button>
                    Đăng Nhập
                </Button>
           </div>
        </div>
    );
}

export default SignInPage;