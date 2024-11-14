import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";


const RightLayout = () => {
    return (
        <div className="space-y-8">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightLayout;