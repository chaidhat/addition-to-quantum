
Let a bit $a$ be an [[element]] of either 0 or 1

$$
a\in\{0,1\}
$$

Let a system be $n$ bits represented in a [[string]]. This is also known as the state

$$
z\in \{0,1\}^n
$$

A model of computation for [[classical-computer]] and [[quantum-computer]]

We can think of circuits as [[function|functions]]. 

Let there be a circuit $f$. It accepts a [[variable]] $z_{in}$ and outputs a variable $z_{out}$ 

 $$
 z_{out}=f(z_{in})
 $$

# Gates

What can $f$ be?

NOT GATE
$$
NOT(a) = 1 - a
$$


NAND GATE
$$
NAND(a,b) = 1-ab
$$


TYPICAL GATE
$$
f(z_1, z_2, ...)=z_{out}
$$