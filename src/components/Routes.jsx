import React from 'react';
import { Calculator } from './Calculator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function PagesRotues(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Calculator />} />
            </Routes>
        </BrowserRouter>        
    );
}