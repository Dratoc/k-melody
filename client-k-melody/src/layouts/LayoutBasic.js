import Main from '../components/layout/Main';

export default function LayoutBasic(props){
    const { children } = props;

    return(
        <div>
            <Main>
                {children}
            </Main>
        </div>
    );
}

