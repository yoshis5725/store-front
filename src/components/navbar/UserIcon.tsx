import React from 'react';
import {LuUser2} from "react-icons/lu";
import {currentUser, auth} from "@clerk/nextjs/server";

const UserIcon = async () => {
    const user = await currentUser();
    const profileImage = user?.imageUrl;

    // If the user has a profile image, display it
    if (profileImage) {
        return <img src={profileImage} alt={'profile-image'} className={'w-6 h-6 rounded-full object-cover'}/>;
    }

    // If the user does not have a profile image, display the default user icon
    return <LuUser2 className={'w-6 h-6 bg-primary rounded-full text-white'}/>;
};

export default UserIcon;