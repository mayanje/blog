For a while I have been looking for a good solution to providing flow charts in my github markdown documentation.
There are many good tools for creating flow charts however few provide markdown like simplicity in their implementation.
Most require secondary applications to build the chart and don't allow simple updates via modifying the raw markdown
without a build step. 

Recently I have come across an interesting tool available at http://yuml.me

If you want to use this tool, it uses basic uml syntax and can generate charts like below.

![class diagram](http://yuml.me/diagram/class/
  [note: You can stick notes on diagrams too!{bg:cornsilk}],
  [Customer]<>1-orders 0..*>[Order], 
  [Order]++*-*>[LineItem], 
  [Order]-1>[DeliveryMethod], 
  [Order]*-*>[Product], 
  [Category]<->[Product], 
  [DeliveryMethod]^[National], 
  [DeliveryMethod]^[International]
)
