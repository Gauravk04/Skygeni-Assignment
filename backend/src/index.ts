import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import customerTypeRoutes from './routes/customertype';
import accountIndustryRoutes from './routes/accountindustry';
import teamRoutes from './routes/team';
import productLineRoutes from './routes/productline';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/customer-type', customerTypeRoutes);
app.use('/api/account-industry', accountIndustryRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/product-line', productLineRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
