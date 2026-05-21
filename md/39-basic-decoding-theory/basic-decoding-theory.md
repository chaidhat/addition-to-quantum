# Basic Decoding Theory

This is based on [<span class="underline">quantum information capacity</span>](#quantum-information-capacity).
Given that Alice is trying to send a message to Bob, the decoding error is
$$P_E=1-P_s\geq 1-\frac{d}{N}$$
Note that

1.  If $N\geq d$, then $P_E\geq 0$ – there is no way to reliably distinguish messages

2.  lower bound in theorem also holds even if alice sends mixed states $\{\rho_\alpha\}_{\alpha=1}^N$

3.  A quantum system with [<span class="underline">Hilbert space</span>](#hilbert-spaces) dimension $d$ has information capacity of $\log_2(d)$ bits. This is the maximum number of bits that can be stored, communicated, and read reliably. This is the same amount of infromation from classical d-state system.
