import React from 'react';

export default function Input({className, loading, type, rightIcon, leftIcon, ...props}){
	return (
		<div className={`input-icon ${className ?? ""}`}>
			{
				loading && (
					<span className="input-icon-addon">
						<div className="spinner-border spinner-border-sm text-muted" role="status" />
					</span>
				)
			}
			{
				leftIcon && (
					<div className='input-icon-addon'>
						{leftIcon}
					</div>
				)
			}
			{
				<input 
					{...props}
					className={'form-control'}
					type={type}
				/>
			}
			{
				rightIcon && (
					<div className='input-icon-addon'>
						{rightIcon}
					</div>
				)
			}
		</div>
	)
}