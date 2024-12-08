import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    posts: [
        {
            id: '1',
            user: {
                id: 'user-1',
                name: 'Muznah Rehman',
                profilePicture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fuk.pinterest.com%2Fpin%2F598908450417163654%2F&psig=AOvVaw38QtQec9cFsilyojCo9703&ust=1733511267969000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCL_u2mkYoDFQAAAAAdAAAAABAE',


            },
            content: 'Just a Random Post ',
            image: 'https://www.google.com/imgres?q=random%20post&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064697436632&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fsharethoughtsfeelings%2F&docid=BqyiHjbb-p5p9M&tbnid=mA5ErPvTjXerBM&vet=12ahUKEwj7yd-Lp5GKAxUigP0HHZ3mD2MQM3oECBgQAA..i&w=1024&h=1024&hcb=2&ved=2ahUKEwj7yd-Lp5GKAxUigP0HHZ3mD2MQM3oECBgQAA',
         liked:false,
            likes: 0,


        },


    ],

};

export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        likePost: (state, action) => {

            const post = state.posts.find((post) => post.id == action.payload);
            if (post) {
                post.liked=!post.liked;
                post.likes = post.likes === 0 ? 1 : 0;
            }

        },
    },
});
export const { likePost } = feedSlice.actions;
export default feedSlice.reducer;