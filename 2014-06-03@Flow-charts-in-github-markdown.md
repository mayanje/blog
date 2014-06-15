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

This chart is rendered into the markdown of this blog post using the following markdown

```md
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
```

As you can see this is a basic image embed wrapping a couple lines of uml, shown below for clarity.

```uml
  [note: You can stick notes on diagrams too!{bg:cornsilk}],
  [Customer]<>1-orders 0..*>[Order], 
  [Order]++*-*>[LineItem], 
  [Order]-1>[DeliveryMethod], 
  [Order]*-*>[Product], 
  [Category]<->[Product], 
  [DeliveryMethod]^[National], 
  [DeliveryMethod]^[International]
```

Github markdown gives us the capability to automatically url encode the uml data into the image url.  This, plus the robustness the [yuml.me](yuml.me) tool parsing of url parameters, gives us the ability to cleanly write uml in our markdown file.  This allows us to simply update our charts and not require complex tools to render our charts and update built diagrams.

