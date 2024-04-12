import React,{FC} from 'react';
interface HeadProps{
    title:string;
    description:string;
    keyword:string;

}

    

const Heading:FC <HeadProps> =({title,description,keyword})=>{
    return (
        <div>
            <title>{title}</title>
            <meta name='description'content="wdth=device-width,initial-scale-scale=1"></meta>
            <meta name='description'content={description}></meta>
            <meta name='keywords' content={keyword}></meta>
        </div>
    );
};

export default Heading;