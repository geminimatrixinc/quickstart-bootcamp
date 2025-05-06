import React from 'react';
import { useForm } from 'react-hook-form';

// React Hook Form is a popular library for handling forms in React. It simplifies form handling and validation.

const ReactHookFormExample = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <input
                    type="text"
                    {...register('name', { required: true })}
                />
                {errors.name && <p>Name is required</p>}
            </label>
            <label>
                Email:
                <input
                    type="email"
                    {...register('email', { required: true })}
                />
                {errors.email && <p>Email is required</p>}
            </label>
            <label>
                Message:
                <textarea
                    {...register('message')}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReactHookFormExample;
