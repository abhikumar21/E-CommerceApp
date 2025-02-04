// 2:10:29 => 4 

const authenticate = async(req, res, next) => {
    // Bearer, Token
    try {
        const token = req.headers.authorization?.split(" ");
        if(!token) {
            
        }
    } catch (error) {
        
    }
}