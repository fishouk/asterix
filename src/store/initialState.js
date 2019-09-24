const initialState = {
    isLoading: false,
    users: [ 
            {
                admins: [ 
                    {
                        admin1: { id: '1', username: 'Admin', password: '12345', isLogin: false},
                    },
                ]
            },
            {
                users: [
                    {
                        
                    },
                ],
            }
    ],
    news: [],
    error: null
}

export default initialState;