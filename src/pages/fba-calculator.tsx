import React, { useState } from 'react';
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Calculator,
  DollarSign,
  Package,
  Truck,
  BarChart,
  ArrowRight,
  Info
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface FBACalculation {
  revenue: number;
  amazonFees: number;
  fbaFees: number;
  productCost: number;
  shippingCost: number;
  netProfit: number;
  roi: number;
  margin: number;
}

export default function FBACalculator() {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: '',
    weight: ''
  });

  const [pricing, setPricing] = useState({
    sellingPrice: '',
    productCost: '',
    shippingToAmazon: ''
  });

  const [calculation, setCalculation] = useState<FBACalculation | null>(null);

  const calculateFees = () => {
    // Convert inputs to numbers
    const price = Number(pricing.sellingPrice);
    const cost = Number(pricing.productCost);
    const shipping = Number(pricing.shippingToAmazon);
    
    // Calculate volume and dimensional weight
    const volume = Number(dimensions.length) * Number(dimensions.width) * Number(dimensions.height);
    const weight = Math.max(Number(dimensions.weight), volume / 139); // Dimensional weight calculation
    
    // Calculate Amazon referral fee (typical category rate)
    const referralFee = price * 0.15;
    
    // Calculate FBA fees based on size and weight
    let fbaFee = 0;
    if (weight <= 1) {
      fbaFee = 3.22;
    } else if (weight <= 2) {
      fbaFee = 4.75;
    } else {
      fbaFee = 4.75 + (weight - 2) * 0.38;
    }
    
    // Calculate total costs and profit
    const totalAmazonFees = referralFee;
    const totalFBAFees = fbaFee;
    const totalCosts = cost + shipping + totalAmazonFees + totalFBAFees;
    const profit = price - totalCosts;
    
    // Calculate ROI and margin
    const roi = (profit / (cost + shipping)) * 100;
    const margin = (profit / price) * 100;
    
    setCalculation({
      revenue: price,
      amazonFees: totalAmazonFees,
      fbaFees: totalFBAFees,
      productCost: cost,
      shippingCost: shipping,
      netProfit: profit,
      roi: roi,
      margin: margin
    });
  };

  return (
    <>
      <Head>
        <title>FBA Calculator - VOC AI</title>
        <meta name="description" content="Calculate Amazon FBA fees, costs, and potential profits with our advanced FBA Calculator. Make data-driven decisions for your Amazon business." />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Calculator className="w-4 h-4 mr-2 text-blue-600" />
              Profit Calculator
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Calculate Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Amazon FBA Profits
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Make informed decisions with our comprehensive FBA calculator. Factor in all costs and fees to accurately predict your profits.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-blue-600" />
                    Product Dimensions
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="length">Length (inches)</Label>
                    <Input
                      id="length"
                      type="number"
                      value={dimensions.length}
                      onChange={(e) => setDimensions(prev => ({ ...prev, length: e.target.value }))}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="width">Width (inches)</Label>
                    <Input
                      id="width"
                      type="number"
                      value={dimensions.width}
                      onChange={(e) => setDimensions(prev => ({ ...prev, width: e.target.value }))}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Height (inches)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={dimensions.height}
                      onChange={(e) => setDimensions(prev => ({ ...prev, height: e.target.value }))}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight">Weight (lbs)</Label>
                    <Input
                      id="weight"
                      type="number"
                      value={dimensions.weight}
                      onChange={(e) => setDimensions(prev => ({ ...prev, weight: e.target.value }))}
                      placeholder="0.00"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                    Pricing Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="selling-price">Selling Price ($)</Label>
                    <Input
                      id="selling-price"
                      type="number"
                      value={pricing.sellingPrice}
                      onChange={(e) => setPricing(prev => ({ ...prev, sellingPrice: e.target.value }))}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="product-cost">Product Cost ($)</Label>
                    <Input
                      id="product-cost"
                      type="number"
                      value={pricing.productCost}
                      onChange={(e) => setPricing(prev => ({ ...prev, productCost: e.target.value }))}
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <Label htmlFor="shipping">Shipping to Amazon ($)</Label>
                    <Input
                      id="shipping"
                      type="number"
                      value={pricing.shippingToAmazon}
                      onChange={(e) => setPricing(prev => ({ ...prev, shippingToAmazon: e.target.value }))}
                      placeholder="0.00"
                    />
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={calculateFees}
                  >
                    Calculate Profits
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Results Section */}
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-blue-600" />
                    Profit Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {calculation ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600">Net Profit</p>
                          <p className="text-2xl font-bold text-blue-600">
                            ${calculation.netProfit.toFixed(2)}
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600">ROI</p>
                          <p className="text-2xl font-bold text-blue-600">
                            {calculation.roi.toFixed(1)}%
                          </p>
                        </div>
                      </div>

                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Cost Breakdown</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>Revenue</TableCell>
                            <TableCell className="text-right">${calculation.revenue.toFixed(2)}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Amazon Fees</TableCell>
                            <TableCell className="text-right text-red-600">-${calculation.amazonFees.toFixed(2)}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>FBA Fees</TableCell>
                            <TableCell className="text-right text-red-600">-${calculation.fbaFees.toFixed(2)}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Product Cost</TableCell>
                            <TableCell className="text-right text-red-600">-${calculation.productCost.toFixed(2)}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Shipping Cost</TableCell>
                            <TableCell className="text-right text-red-600">-${calculation.shippingCost.toFixed(2)}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-bold">Net Profit</TableCell>
                            <TableCell className="text-right font-bold text-blue-600">${calculation.netProfit.toFixed(2)}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>

                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Key Metrics:</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Profit Margin</p>
                            <p className="font-semibold">{calculation.margin.toFixed(1)}%</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Return on Investment</p>
                            <p className="font-semibold">{calculation.roi.toFixed(1)}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Enter product details to calculate profits</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Use Our FBA Calculator?</h2>
            <p className="text-xl text-gray-600">Make informed decisions with accurate profit calculations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calculator className="h-8 w-8 text-blue-600" />,
                title: "Accurate Fee Calculation",
                description: "Our calculator includes all Amazon fees, FBA fees, and your costs for precise profit prediction."
              },
              {
                icon: <BarChart className="h-8 w-8 text-green-600" />,
                title: "Detailed Breakdown",
                description: "See a complete breakdown of all costs and fees affecting your bottom line."
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-purple-600" />,
                title: "Real-Time Updates",
                description: "Instantly see how price changes affect your profits and ROI."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-blue-100 transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Scale Your Amazon Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of sellers using VOC AI to optimize their Amazon business.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Calculator className="mr-2 h-5 w-5" /> Try More Tools
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700 hover:border-transparent">
              <Info className="mr-2 h-5 w-5" /> Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}