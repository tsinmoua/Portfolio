import { createMuiTheme } from '@material-ui/core/styles';

const navy = "#004080"
const orange = "#FFC04A"

export default createMuiTheme({
    palette: {
        common: {
            navy: navy,
            orange: orange
        },
        primary: {
            main: navy
        },
        secondary: {
            main: orange,
        }
    }
})