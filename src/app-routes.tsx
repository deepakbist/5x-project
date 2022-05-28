import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import RestaurantDetail from './components/restaurant-detail';
import NotFound from './components/not-found';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/restaurant-detail" element={<RestaurantDetail />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
