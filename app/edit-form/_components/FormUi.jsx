"use client"

import React from 'react';
import { Input } from "@/components/ui/input";

const FormUi = ({ jsonForm }) => {
  return (
    <div className='border p-5'>
      <h2 className='font-bold text-center text-2xl'>{jsonForm?.formTitle}</h2>
      <h2 className='text-sm text-gray-400 text-center'>{jsonForm?.formName}</h2>

      {/* {
        jsonForm.formFields.map((field,index)=>(
          <div>
            <Input type={field.fieldType} placeholder={jsonForm.placeholderName} name={field?.fieldName} />


          </div>
        ))
      } */}
    </div>
  );
}

export default FormUi;
