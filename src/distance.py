def calculate_distance(coord1, coord2):
    x1, y1 = coord1
    x2, y2 = coord2
    
    distance = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
    return distance

# Inputs
coord1 = (302, 1204)
coord2 = (294, 1212)

result = calculate_distance(coord1, coord2)
print("distance: ",result)
print("estimate no. towers: ", result/9)
